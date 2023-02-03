import React from 'react';
import {
  Table,
} from 'reactstrap';

function EntryDetails(props) {
  const { entry } = props;
  return (
    <div>
      <p>
        {entry.text}
      </p>
      <Table borderless striped size="sm">
        <tbody>
          <tr>
            <th>Position</th>
            <td>{entry.point.toString()} {entry.position.source}</td>
          </tr>
          { !Number.isNaN(Number(entry.speed.sog))
            && <tr>
            <th>Speed</th>
            <td>{entry.speed.sog}kt</td>
            </tr>
          }
          { !Number.isNaN(Number(entry.heading))
            && <tr>
              <th>Course</th>
              <td>{entry.heading}°</td>
            </tr>
          }
          { entry.wind
            && <tr>
              <th>Wind</th>
              <td>
                {!Number.isNaN(Number(entry.wind.speed)) ? `${entry.wind.speed}kt ` : ''}
                {!Number.isNaN(Number(entry.wind.direction)) ? `${entry.wind.direction}°` : ''}
              </td>
            </tr>
          }
        </tbody>
      </Table>
    </div>
  );
}

export default EntryDetails;