import React, { useState } from "react";
import TopNav from "../../layout/top-nav/nav/TopNav";
import Search from "../../layout/top-nav/search/Search";

import Note from "./Note";

import Styles from "./note.module.scss";

const Notes = ({
  saveAllNotes,
  handleChange,
  isNoteSaved,
  handleFilter,
  handleDate,
  handleSort,
  deleteNote,
  searchDate,
  saveNote,
  search,
  filter,
  sort,
  form,
}) => {
  const sortedNotes = form.sort((a, b) => {
    if (sort === "Newest") {
      return (
        new Date(b.currentDate).getTime() - new Date(a.currentDate).getTime()
      );
    } else if (sort === "Oldest") {
      return (
        new Date(a.currentDate).getTime() - new Date(b.currentDate).getTime()
      );
    }
  });

  console.log(sort);
  return (
    <div className={Styles.notes}>
      <TopNav
        searchDate={searchDate}
        search={search}
        handleSort={handleSort}
        handleFilter={handleFilter}
      />
      <div>
        <h3>Notes</h3>
        <p>Tap icon to write note and submit note.</p>
      </div>
      <div className={Styles.notes_container}>
        {sortedNotes.map((item, index) => {
          return (
            <Note
              item={item}
              key={index}
              index={index}
              handleDate={handleDate}
              saveAllNotes={saveAllNotes}
              handleChange={handleChange}
              isNoteSaved={isNoteSaved}
              deleteNote={deleteNote}
              saveNote={saveNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
