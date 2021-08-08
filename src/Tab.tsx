import React from "react";
import "./css/Tab.css";

/*
 * Structure
 * - TabContainer is a table
 * - contains TabRows
 * - TabRows contain TabCells followed by vl
 * - TabCell contains a Bar, which is a table
 */

let notesPerBar = 16;

// a note is a td with an onclick function
class Note extends React.Component {
    render() {
        return (
            <td className="Note">-</td>
        );
    }
}

// a string is a tr of notes
class TabString extends React.Component {
    render() {
        const notes = [];
        for (let i = 0; i < notesPerBar; i++) {
            notes.push(<Note key={i}/>);
        }

        return (
            <tr className="TabString">
                {notes}
            </tr>
        );
    }
}

// a bar is a td holding a table
class Bar extends React.Component {
    render() {
        const strings = [];
        for (let i = 0; i < 6; i++) {
            strings.push(<TabString key={i}/>);
        }

        return (
            <td className="Bar">
                <table>
                    <tbody>
                        {strings}
                    </tbody>
                </table>
            </td>
        );
    }
}

// a tab could be a tr that uses display: grid
export default class Tab extends React.Component {

    render() {
        const bars = [];
        for (let i = 0; i < this.props.numBars; i++) {
            bars.push(<Bar key={i}/>);
        }

        return (
            <table className="Tab">
                <tbody>
                    <tr className="tab-row">
                        {bars}
                    </tr>
                </tbody>
            </table>
        );
    }
}