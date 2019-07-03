import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notes.css';
import Note from "./Note";

class Notes extends Component {

  get hasNotes() {
    const { notes } = this.props;
    return notes && notes.length > 0;
  }

  render() {
    const { notes, classes } = this.props;
    return (
      <div className={`notes ${classes}`}>
        <ul className="notes__list">
          {this.hasNotes && notes.map(note => (
            <Note
              key={note.id}
              title={note.title}
            />
          ))}
        </ul>
      </div>
    )
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

Notes.defaultProps = {
  classes: '',
};

export default Notes;
