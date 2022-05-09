import * as React from 'react';
import './App.css'

const WEEK_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const LINES = [1, 2, 3, 4, 5, 6]

export default class Calendar extends React.Component {

  render () {
    return (<div>
      <table cellPadding={0} cellSpacing={0} className="table">
        <caption>
          <div>
            <span>January 2022</span>
            <div>
              <span>{'<'}</span>
              <span>Today</span>
              <span>{'>'}</span>
            </div>
          </div>
        </caption>
        <tr>
          {
            WEEK_NAMES.map((week, key) => {
              return <th key={key}>{week}</th>
            })
          }
        </tr>
        {
          LINES.map((l, key) => {
            return <tr key={key}>
              {
                WEEK_NAMES.map((week, index) => {
                  return <td key={index}>{index}</td>
                })
              }
            </tr>
          })
        }



      </table>
    </div>)
  }
}