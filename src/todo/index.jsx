import React, { useEffect, useState } from "react";
import AllButtons from "./components/handleButton";
import InputTetx from "./components/handleInput";
import ItemDetails from "./components/dataDetails";
import { useDispatch } from "react-redux";
import { AddToCart } from "./slice";

export default function TodoList() {
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(null);
  const [completeItem, setCompleteItem] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (array.length > 0) {
      dispatch(AddToCart(array));
    }
  }, [array, dispatch]);

  const addTask = () => {
    if (search.trim() !== "") {
      if (edit !== null) {
        updateTask(edit);
      } else {
        setArray([...array, search]);
      }
      setSearch("");
      setEdit(null);
    }
  };

  const editTask = (index) => {
    setEdit(index);
    setSearch(array[index]);
  };

  const updateTask = (index) => {
    const updatedTasks = [...array];
    updatedTasks[index] = search;
    setArray(updatedTasks);
  };

  const deleteTask = (index, complete) => {
    if (complete) {
      const updatedCompletedItem = [...completeItem];
      updatedCompletedItem.splice(index, 1);
      setCompleteItem(updatedCompletedItem);
    }
    const updatedTasks = [...array];
    updatedTasks.splice(index, 1);
    setArray(updatedTasks);
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const completeTask = (index) => {
    const itemToComplete = array[index];
    const updatedTasks = array.filter((_, i) => i !== index);
    setArray(updatedTasks);
    setCompleteItem([...completeItem, itemToComplete]);
  };
  return (
    <div className="md:flex justify-center w-full h-screen md:bg-transparent bg-zinc-200 shadow-md  ">
      <div className="bg-zinc-200 ms:w-1/2 w-full py-5">
        <div>
          <h1 className="text-2xl font-mono font-medium pb-5">To-Do List</h1>
          <div className="w-full flex justify-evenly">
            <InputTetx handleInputChange={handleInputChange} search={search} />
            <AllButtons
              title={edit !== null ? "UpdateTask" : "AddTask"}
              buttonClick={addTask}
            />
          </div>
        </div>
        <div className="flex flex-col w-full  pt-4">
          {array.map((task, index) => (
            <div key={index}>
              <div className=" md:flex  md:justify-evenly  py-2 space-x-1">
                <p className="py-1 bg-zinc-200 w-48  ">{task}</p>
                <div className=" md:w-64 w-full space-x-3 ">
                  <AllButtons
                    title="EditItem"
                    buttonClick={() => editTask(index)}
                  />
                  <AllButtons
                    title="Complete"
                    buttonClick={() => completeTask(index)}
                  />
                  <AllButtons
                    title="Delete"
                    buttonClick={() => deleteTask(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 w-full  md:bg-zinc-200 bg-zinc-300 py-5">
        <ItemDetails completeItem={completeItem} />
      </div>
    </div>
  );
}
