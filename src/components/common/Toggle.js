import React from 'react';
import styled from "styled-components";

export const Toggle = () => (
  <>
    <ToggleBar>
      <HiddenInput type="checkbox" checked />
      <ToggleSwitch />
    </ToggleBar>
  </>
);

const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked {
    background-color: #bfd7ee;
  }
`

const ToggleBar = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: #bfd7ee;
  border-radius: 30px;
  
  input:checked {
    background-color: #bfd7ee;
  }
`

const ToggleSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 30px;
  right: 0;
  bottom: 0;
  background-color: #1779c5;
  border-radius: 100%;
`
