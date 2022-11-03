import { useEffect, useState } from "react";
import styled from "styled-components";
import OutSideClickHandler from "react-outside-click-handler";
import arrow from "../assets/arrow.png";

interface FullDropDownProps<T> {
  placeholder: string;
  value: T;
  items: ReadonlyArray<T>;
  onClickValue: (value: T) => void;
}

const FullDropDown = <T extends string>({
  items,
  placeholder,
  value,
  onClickValue,
}: FullDropDownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(value || placeholder);
  useEffect(() => {
    setSelectValue(value);
  }, [value]);
  return (
    <OutSideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <DropDownContainer>
        <DropDownBox onClick={() => setIsOpen(!isOpen)}>
          {selectValue}
        </DropDownBox>
        <ArrowIcon src={arrow} onClick={() => setIsOpen(!isOpen)} />
        <SelectList>
          {items.map((item, idx) => (
            <SelectListBox
              key={idx}
              onClick={() => {
                onClickValue(item);
                setSelectValue(item);
              }}
            >
              {item}
            </SelectListBox>
          ))}
        </SelectList>
      </DropDownContainer>
    </OutSideClickHandler>
  );
};

const DropDownContainer = styled.div`
  position: relative;
`;

const DropDownBox = styled.div`
  width: 100%;
  height: 43px;
  border-radius: 8px;
  border: 1px solid #828282;
  display: flex;
  align-items: center;
  padding: 16px;
`;

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 11px;
`;

const SelectList = styled.div`
  position: absolute;
  bottom: -8;
  left: 0;
  border: 1px solid #828282;
  display: flex;
  flex-direction: column;
  * + * {
    border-top: 1px solid #828282;
  }
`;

const SelectListBox = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 400;
`;

export default FullDropDown;
