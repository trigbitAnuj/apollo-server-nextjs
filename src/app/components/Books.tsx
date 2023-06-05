"use client";
import React from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import Query_getBooks from "../queries/getBooks.gql";

type BookType = {
  title: string;
  author: string;
};

export const dynamic = "force-static";
type BooksType = BookType[];

const Books = () => {
  const { data, error, refetch } = useSuspenseQuery<{ books: BooksType }>(
    Query_getBooks
  );

  if (!data && error) {
    throw new Error();
  }

  return (
    <div>
      {data.books.map((book) => (
        <React.Fragment key={`id-${book.title}`}>
          <h1>Title:{book.title}</h1>
          <p>Author:{book.author}</p>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Books;
