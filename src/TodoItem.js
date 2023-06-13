import React, { useState, useCallback } from "react";
import GptMessage from "./DangerMessage";
import { useTodosDispatchContext } from "./TodoContext";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [done, setDone] = useState(false);
  const dispatch = useTodosDispatchContext();

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  let taskContent;
  let style;
  let buttonStyle;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          className="form-control"
          defaultValue={todo.title}
          onChange={(e) => {
            dispatch({
              type: "changed",
              todo: {
                ...todo,
                title: e.target.value,
              },
            });
          }}
        />
        <div className="btn-group" role="group" aria-label="simple buttons">
          <button
            className="btn btn-success my-3"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="btn btn-warning my-3"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      </>
    );
  }

  if (done) {
    style = "alert alert-success";
    buttonStyle = "d-none";
  }

  return (
    <div className={"row" + done ? style : ""}>
      <div className="d-flex w-100 justify-content-between">
        <h4 className="mb-1 d-inline">{todo.title}</h4>
        <button
          type="button"
          className={done ? "btn-close d-inline" : "d-none"}
          aria-label="Close"
          onClick={() => {
            dispatch({
              type: "deleted",
              id: todo.id,
            });
          }}
        ></button>
      </div>
      <hr />
      <p>Todo #{todo.id + 1}</p>
      {taskContent}
      <div className={done ? "d-none" : ""}>
        {todo.isDue ? GptMessage() : ""}
      </div>
      <small>Due: {todo.date}</small>
      <div
        className={"btn-group " + done ? buttonStyle : "my-3"}
        role="group"
        aria-label="simple buttons"
      >
        <button
          className="btn btn-success"
          onClick={() => {
            setDone(true);
            dispatch({
              type: "success",
              todo: {
                ...todo,
                isCompleted: true,
              },
            });
          }}
        >
          Completed
        </button>

        <button
          className="btn btn-info"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            //console.log(todo.id);
            dispatch({
              type: "deleted",
              id: todo.id,
            });
          }}
        >
          Delete
        </button>
      </div>

      <Particles
        className={done ? "position-absolute" : "d-none"}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            zIndex: -100,
          },
          emitters: {
            life: {
              count: 1,
              duration: 5,
            },
            position: {
              x: 50,
              y: 100,
            },
            rate: {
              quantity: 5,
              delay: 0.15,
            },
          },
          particles: {
            color: {
              value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
            },
            move: {
              decay: 0.05,
              direction: "top",
              enable: true,
              gravity: {
                enable: true,
              },
              outModes: {
                top: "none",
                default: "destroy",
              },
              speed: {
                min: 50,
                max: 100,
              },
            },
            number: {
              value: 0,
            },
            opacity: {
              value: 1,
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 30,
              },
            },
            tilt: {
              direction: "random",
              enable: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 30,
              },
            },
            size: {
              value: 3,
              animation: {
                enable: true,
                startValue: "min",
                count: 1,
                speed: 16,
                sync: true,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enlighten: {
                enable: true,
                value: 25,
              },
              enable: true,
              speed: {
                min: 5,
                max: 15,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -7,
                max: 7,
              },
            },
            shape: {
              type: ["circle", "square"],
              options: {},
            },
          },
          responsive: [
            {
              maxWidth: 1024,
              options: {
                particles: {
                  move: {
                    speed: {
                      min: 33,
                      max: 66,
                    },
                  },
                },
              },
            },
          ],
          detectRetina: true,
        }}
      ></Particles>
    </div>
  );
}
