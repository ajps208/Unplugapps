import React from "react";
import Form from "./Form";
import Table from "./Table";
import Buttons from "./Buttons";
import './Body.css'

function Body() {
  return (
    <div className="bg-slate-50 h-screen p-4">
      <div className="container mx-auto shadow-lg border border-l rounded-md border-black p-5">
        <div className="flex flex-row  ">
          <div className="flex flex-col  w-11/12">
          <Form/>

            <div className="mb-4">
             <Table/>
            </div>
          </div>
          <div className="hide-on-print flex flex-col justify-end w-1/12 mx-10 mb-24">
           <Buttons/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
