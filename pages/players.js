import * as React from 'react';
import { useState } from 'react';
import { SortableTable } from '../components/SortableTable';
import { NavBar } from '../components/NavBar';
import {LinearGradient} from "react-text-gradients"

export default function players() {
    return (
        <div>
          <NavBar />
          <div style={{width: "80%", marginLeft: "10%", textAlign: "center" }}>
            <h1><LinearGradient gradient={["to right", "#f54242 ,#b50b02"]}>Player</LinearGradient> Rankings</h1>
            <SortableTable />
          </div>
        </div>
      );
}