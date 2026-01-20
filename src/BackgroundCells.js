import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import dates from './utils/dates';
import { segStyle } from './utils/eventLevels';
import { notify } from './utils/helpers';
import { elementType } from './utils/propTypes';
import { dateCellSelection, slotWidth, getCellAtX, pointInBox } from './utils/selection';
import Selection, { getBoundsForNode, isEvent } from './Selection';

class BackgroundCells extends React.Component {

  static propTypes = {
    cellWrapperComponent: elementType,
    container: PropTypes.func,
    selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),

    onSelectSlot: PropTypes.func.isRequired,
    onSelectEnd: PropTypes.func,
    onSelectStart: PropTypes.func,

    range: PropTypes.arrayOf(
      PropTypes.instanceOf(Date)
    ),
    rtl: PropTypes.bool,
    type: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      selecting: false
    };
    this.rootRef = React.createRef();
  }

  componentDidMount(){
    this.props.selectable
      && this._selectable()
  }

  componentWillUnmount() {
    this._teardownSelectable();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectable && !prevProps.selectable)
      this._selectable();

    if (!this.props.selectable && prevProps.selectable)
      this._teardownSelectable();
  }

  render(){
    let { range, cellWrapperComponent: Wrapper } = this.props;
    let { selecting, startIdx, endIdx } = this.state;

    return (
      <div ref={this.rootRef} className='rbc-row-bg'>
        {range.map((date, index) => {
          let selected =  selecting && index >= startIdx && index <= endIdx;
          return (
            <Wrapper
              key={index}
              value={date}
              range={range}
            >
              <div
                style={segStyle(1, range.length)}
                className={cn(
                  'rbc-day-bg',
                  selected && 'rbc-selected-cell',
                  dates.isToday(date) && 'rbc-today',
                )}
              />
            </Wrapper>
          )
        })}
      </div>
    )
  }

  _selectable(){
    let node = this.rootRef.current;
    let selector = this._selector = new Selection(this.props.container)

    selector.on('selecting', box => {
      let { range, rtl } = this.props;
      let currentNode = this.rootRef.current;

      let startIdx = -1;
      let endIdx = -1;

      if (!this.state.selecting) {
        notify(this.props.onSelectStart, [box]);
        this._initial = { x: box.x, y: box.y };
      }
      if (selector.isSelected(currentNode)) {
        let nodeBox = getBoundsForNode(currentNode);

        ({ startIdx, endIdx } = dateCellSelection(
            this._initial
          , nodeBox
          , box
          , range.length
          , rtl));
      }

      this.setState({
        selecting: true,
        startIdx, endIdx
      })
    })

    selector.on('mousedown', (box) => {
      if (this.props.selectable !== 'ignoreEvents') return

      return !isEvent(this.rootRef.current, box)
    })

    selector
      .on('click', point => {
        let currentNode = this.rootRef.current;
        if (!isEvent(currentNode, point)) {
          let rowBox = getBoundsForNode(currentNode)
          let { range, rtl } = this.props;

          if (pointInBox(rowBox, point)) {
            let width = slotWidth(getBoundsForNode(currentNode),  range.length);
            let currentCell = getCellAtX(rowBox, point.x, width, rtl, range.length);

            this._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: 'click',
            })
          }
        }

        this._initial = {}
        this.setState({ selecting: false })
      })

    selector
      .on('select', () => {
        this._selectSlot({ ...this.state, action: 'select' })
        this._initial = {}
        this.setState({ selecting: false })
        notify(this.props.onSelectEnd, [this.state]);
      })
  }

  _teardownSelectable() {
    if (!this._selector) return
    this._selector.teardown();
    this._selector = null;
  }

  _selectSlot({ endIdx, startIdx, action }) {
    if (endIdx !== -1 && startIdx !== -1)
      this.props.onSelectSlot &&
        this.props.onSelectSlot({
          start: startIdx,
          end: endIdx,
          action
        })
  }
}

export default BackgroundCells;
