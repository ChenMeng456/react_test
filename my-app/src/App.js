import * as React from 'react';
import './App.css';
import moment from 'moment'

const WEEK_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const LINES = [1, 2, 3, 4, 5, 6]


export default class Calendar extends React.Component {
  state = {
    days: this.initCalendar(),
    active: 0
  }
  // 获取当前月天数
  getMonthDays () {
    return moment().daysInMonth()
  }
  // 获取当前月的第一天是星期几
  getWeekDays () {
    return moment().startOf('month').weekday()
  }
  // 获取上个月份
  getLastMonth () {
    return moment().subtract(1, 'month').format('YYYY-MM')
  }
  // 获取下个月份 
  getNextMonth () {
    return moment().add(1, 'month').format('YYYY-DD')
  }
  //  初始化日历
  initCalendar () {
    const totalDayInMonth = this.getMonthDays()
    let totalDayInLastMonth = this.getMonthDays(this.getLastMonth())
    let nextFirstDate = 1
    const lastDays = []
    const currentDays = []
    const nextDays = []
    const currentWeekDay = this.getWeekDays()
    for (let i = 0, len = 42; i < len; i++) {
      if (i < currentWeekDay) {
        lastDays.push(totalDayInLastMonth)
        totalDayInLastMonth--
      } else if (i >= totalDayInLastMonth + currentWeekDay) {
        nextDays.push(nextFirstDate)
        nextFirstDate++
      } else {
        currentDays.push(i - currentWeekDay + 1)
      }
    }
    return [...lastDays.reverse(), ...currentDays, ...nextDays]
  }

  render () {
    console.log(this.state.days)
    console.log(moment().startOf('month').weekday())
    return (<div>
      <table cellPadding={0} cellSpacing={0} className="table">
        <caption>
          <div>
            <span>{moment().year()}.{moment().month() + 1}</span>
            <div>
              <span>{'<'}</span>
              <span>Today</span>
              <span>{'>'}</span>
            </div>
          </div>
        </caption>
        <tbody>
          <tr className='content'>
            {
              WEEK_NAMES.map((week, key) => {
                return <th key={key}>{week}</th>
              })
            }
            {
              this.state.days.map((day, index) => {
                return <td key={index}>{day}</td>
              })
            }
          </tr>
        </tbody>
      </table>
    </div>)
  }
}
