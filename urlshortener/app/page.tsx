"use client";
import "./todo.scss";
import { useRef, useState, useEffect } from "react";
import { Post, Get } from "@/lib/post";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Home() {
  let [todos, settodos] = useState([]);
  const [todolist, settodolist] = useState("");

  useEffect(() => {
    const test = async () => {
      let response = await Get();
      settodos(response);
    };

    test();
  }, []);

  const submit = async (e: any) => {
    e.preventDefault();
    await Post(todolist);
    let response = await Get();
    settodolist(``);
    settodos(response);
  };

  const Deleteit = async (id: string) => {
    await fetch(`api/${id}`);
    let response = await Get();
    settodos(response);
  };

  if (todos.length === 0) {
    return (
      <div className="test">
        <form>
          <input
            type="text"
            className="input"
            onChange={(e) => {
              settodolist(e.target.value);
            }}
            value={todolist}
          ></input>
          <button
            className="btn"
            onClick={(e) => {
              submit(e);
            }}
          >
            Submit
          </button>
          <div></div>
        </form>
      </div>
    );
  }
  todos = todos.toReversed();
  return (
    <>
      <div className="test">
        <form>
          <input
            type="text"
            className="input"
            onChange={(e) => {
              settodolist(e.target.value);
            }}
            value={todolist}
          ></input>
          <button
            className="btn"
            onClick={(e) => {
              submit(e);
            }}
          >
            Submit
          </button>
          <div>
            {todos.map((todo: { _id: string; text: string }) => {
              return (
                <div>
                  <p key={todo._id}>{todo.text}</p>
                  <DeleteIcon
                    className="icon"
                    {...todo}
                    onClick={() => {
                      Deleteit(todo._id);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}
