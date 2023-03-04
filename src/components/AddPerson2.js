import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddPerson2({
  personName2,
  personPhone2,
  personEmail2,
  personOwing2,
  addPerson2,
  setAddPerson2,
  setPersonName2,
  setPersonPhone2,
  setPersonEmail2,
  setPersonOwing2,
  setGroupName,
  GroupName,
  list,
  setList,
  handleSubmit
}) {




  return (
    <>
      <div className="p-8 justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-8 border-black-500 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-evenly p-3 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">
                Add A Person to Group
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form onSubmit={handleSubmit}>
                <div class="form-group row">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div class="col-sm-10 mb-0">
                    <input
                      type="name"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Name"
                      onChange={(e) => setPersonName2(e.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">
                    Phone
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="phone"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Phone Number"
                      onChange={(e) => setPersonPhone2(e.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      onChange={(e) => setPersonEmail2(e.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">
                    Starting balance?
                  </label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend ml-9">
                      <span class="input-group-text">$</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="0.00"
                      onChange={(e) => setPersonOwing2(e.target.value)}
                    />
                    <div class="input-group-append">
                      <span class="input-group-text mr-9">.00</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end pb-6 px-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="justify-center mt-3 bg-blue-500 font-bold py-2 px-4 rounded shadow border-2 border-blue-500 hover:bg-white transition-all duration-300"
                onClick={() => setAddPerson2(false)}
              >
                Close
              </button>
              <button
                className="justify-center mt-3 ml-2 bg-blue-500 font-bold py-2 px-4 rounded shadow border-2 border-blue-500 hover:bg-white transition-all duration-300"
                onClick={() => {
                  setAddPerson2(false);
                  
                  handleSubmit("");
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}