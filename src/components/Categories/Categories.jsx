import React from "react";
import Container from "../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";
import { useSearchParams } from "react-router-dom";
import { BsFilterLeft } from "react-icons/bs";
const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className="pt-4 flex justify-between flex-row items-center justify-center overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.label}
            selected={category === item.label}
          />
        ))}

        <div className="">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <BsFilterLeft></BsFilterLeft> Filter
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Select your Price Range!</h3>
              <input
                type="range"
                min={0}
                max="100"
                value="25"
                className="range my-6"
                step="25"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>100$</span>
                <span>200$</span>
                <span>400$</span>
                <span>1000$</span>
                <span>5000$</span>
              </div>
              
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Search</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
