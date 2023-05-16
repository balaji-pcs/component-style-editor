import React, { useState } from "react";
import Container from "../customModules/components/Container";
import SearchBar from "../customModules/components/SearchBar";
import Accordion from "../customModules/components/Accordion";
import Chip from "../customModules/components/Chip";
import Note from "../customModules/components/Note";
import Divider from "../customModules/components/Divider";
import TextIcon from "../utils/icons/TextIcon";
import Dropdown from "../customModules/components/Dropdown";
import DustbinIcon from "../utils/icons/DustbinIcon";
import DoubleArrowIcon from "../utils/icons/DoubleArrowIcon";
import MarginIcon from "../utils/icons/MarginIcon";
import ThreeDotsIcon from "../utils/icons/ThreeDotsIcon";
import DropdownWithInput from "../customModules/components/DropdownWithInput";
import PaddingIcon from "../utils/icons/PaddingIcon";
import PaddingIcon2 from "../utils/icons/PaddingIcon2";
import DisplayBlockIcon from "../utils/icons/DisplayBlockIcon";
import DisplayInlineBlockIcon from "../utils/icons/DisplayInlineBlockIcon";
import DisplayInlineIcon from "../utils/icons/DisplayInlineIcon";
import DisplayFlexIcon from "../utils/icons/DisplayFlexIcon";
import DisplayInlineFlexIcon from "../utils/icons/DisplayInlineFlexIcon";
import Button from "../customModules/components/Button";

import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import hexToRgb from "../utils/tools/HEXtoRGB";
import { updateText } from "../../store/reducer/fontReducer";
import { updateSize } from "../../store/reducer/elementSizeReducer";
import { updateSize2 } from "../../store/reducer/elementSize2Reducer";
import { updateSelectedBackroundColor } from "../../store/reducer/backgroundColorReducer";
import { updateSelectedFontColor } from "../../store/reducer/fontColorReducer";
import parseSizeValue from "../utils/tools/parseSizeValue";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const textOptions1 = ["Button", "Click", "OK"];
const textOptions2 = ["rgb", "rgba", "hex", "hsl"];

const widthAndHeightOptions = [
  "auto",
  "inherit",
  "initial",
  "revert",
  "revert-layer",
  "fit-content",
  "max-content",
  "min-content",
  "unset",
];
const marginAndPaddingOption = [
  "auto",
  "inherit",
  "initial",
  "revert",
  "revert-layer",
  "unset",
];

export default function RightSection() {
  const [word, setword] = useState();

  const { themeColor, bodyColor, compnentsColor, text, size, size2, selected,selectedBackgroundColor, selectedFontColor } =
    useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSelectedTextOption = (font) => {
    dispatch(updateText({ text: font, fontColor: text.fontColor }));
  };
  const handleSelectedColorOption = (color) => {
    dispatch(updateText({ text: text.text, fontColor: color }));
  };
  const handleSizeOfElement = (data) => {
    console.log(data)
    switch (selected.key) {
      case 1:
        dispatch(updateSize({ index: selected.index, newStyles: { ...data } }));
        break;
      case 2:
        dispatch(
          updateSize2({ index: selected.index, newStyles: { ...data } })
        );
        break;
    }
  };

  const backgroundColorOptions = themeColor.map((item, index) => {
    return (
      <p style={{ display: "flex", alignItems: "center",margin:'0px' }} key={index} >
        <b>${item.lable}</b>
      </p>
    );
  });
  const fontColorOptions = bodyColor.map((item, index) => {
    return (
      <p style={{ display: "flex", alignItems: "center",margin:'0px' }} key={index} >
        <b>${item.lable}</b>
      </p>
    );
  });

  return (
    <Container
      height="99.65vh"
      width="17.5vw"
      className="rightSection"
      flexDirection="column"
    >
      <Container height="6.5vh" width="100%" border="none" alignItems="center">
        <b>COMPONENTS PARTS</b>
      </Container>
      <Container height="6.5vh" width="100%" border="none" alignItems="center">
        <SearchBar />
      </Container>
      <Accordion
        title={
          <>
            <Chip lable="button" />
            &nbsp;&nbsp;<b>button</b>
          </>
        }
      >
        <p className="right-accodion">
          <Chip lable="span" />
          &nbsp;&nbsp;<b>text</b>
        </p>
      </Accordion>
      <Note text="Button Selected state hint" />
      <Divider color="#ffffff61" />
      <b>PROPERTIES</b>
      <SearchBar />
      <div className="right-scroll">
        {/* text */}
        <Accordion title="Text" icon={<TextIcon />}>
          <Dropdown
            options={textOptions1}
            defaultselected={textOptions1[0]}
            textOnly={true}
            onSelect={(text) => handleSelectedTextOption(text)}
            selectedColor={text.fontColor}
            className="right-dashboard-dropdown"
            alignArrow="right"
          />
          <Dropdown
            icon={true}
            iconColor={bodyColor[selectedFontColor].color}
            onSelect={(color,index)=>dispatch(updateSelectedFontColor(index))}
            options={fontColorOptions}
            onColorSelect={(color) => handleSelectedColorOption(color)}
            defaultselected={fontColorOptions[0].color}
            className="right-dashboard-dropdown"
            selectedColor={text.fontColor}
            alignArrow="right"
          />
        </Accordion>
        <Divider color="#ffffff61" />
        <Accordion title="Background">
          <span className="rightDashboard-span">
            <Dropdown
              iconColor={themeColor[selectedBackgroundColor].color}
              options={backgroundColorOptions}
              icon={true}
              defaultselected={hexToRgb(themeColor[selectedBackgroundColor].color)}
              className="right-dashboard-dropdown"
              alignArrow="right"
              onSelect={(color,index)=>dispatch(updateSelectedBackroundColor(index))}
            />
            <DustbinIcon />
          </span>
          <span className="rightDashboard-span">
            <Dropdown
              iconColor={themeColor[selectedBackgroundColor].color}
              options={backgroundColorOptions}
              icon={true}
              defaultselected={hexToRgb(themeColor[selectedBackgroundColor].color)}
              className="right-dashboard-dropdown"
              alignArrow="right"
              onSelect={(color,index)=>dispatch(updateSelectedBackroundColor(index))}
            />
            <DustbinIcon />
          </span>
        </Accordion>
        <Divider color="#ffffff61" />
        {/* Size */}
        <Accordion title="Size" icon={<ThreeDotsIcon />}>
          <span className="rightDashboard-span">
            <DoubleArrowIcon />
            <DropdownWithInput
              getSize={(a) =>
                handleSizeOfElement({
                  width: parseSizeValue(a),
                  height: `${selected.key === 1 ? size.height : size2.height}`,
                })
              }
              options={widthAndHeightOptions}
              alignArrow="right"
              defaultselected="Width"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <DoubleArrowIcon rotate={90} />
            <DropdownWithInput
              getSize={(a) =>
                handleSizeOfElement({
                  width: `${selected.key === 1 ? size.width : size2.width}`,
                  height: parseSizeValue(a),
                })
              }
              options={widthAndHeightOptions}
              alignArrow="right"
              defaultselected="Height"
              className="right-dashboard-dropdown"
            />
          </span>
        </Accordion>
        <Divider color="#ffffff61" />
        {/* margin */}
        <Accordion title="margin">
          <span className="rightDashboard-span">
            <MarginIcon side="top" />
            <DropdownWithInput
              getSize={(a) => handleSizeOfElement({ marginTop: parseSizeValue(a) })}
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="Top"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <MarginIcon side="right" />
            <DropdownWithInput
              getSize={(a) => handleSizeOfElement({ marginRight: parseSizeValue(a) })}
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="Right"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <MarginIcon side="bottom" />
            <DropdownWithInput
              getSize={(a) => handleSizeOfElement({ marginBottom: parseSizeValue(a) })}
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="Bottom"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <MarginIcon side="left" />
            <DropdownWithInput
              getSize={(a) => handleSizeOfElement({ marginLeft: parseSizeValue(a) })}
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="Left"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <MarginIcon />
            <DropdownWithInput
              getSize={(a) =>
                handleSizeOfElement({
                  marginTop: parseSizeValue(a),
                  marginRight: parseSizeValue(a),
                  marginBottom: parseSizeValue(a),
                  marginLeft: parseSizeValue(a),
                })
              }
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="All sides"
              className="right-dashboard-dropdown"
            />
          </span>
        </Accordion>
        <Divider color="#ffffff61" />
        {/* padding */}
        <Accordion title="padding" icon={<PaddingIcon2 />}>
          <span className="rightDashboard-span">
            <PaddingIcon side="top" />
            <DropdownWithInput
              getSize={(a) => handleSizeOfElement({ paddingTop: parseSizeValue(a) })}
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="Top"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <PaddingIcon side="right" />
            <DropdownWithInput
              getSize={(a) => handleSizeOfElement({ paddingRight: parseSizeValue(a) })}
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="Right"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <PaddingIcon side="bottom" />
            <DropdownWithInput
              getSize={(a) => handleSizeOfElement({ paddingBottom: parseSizeValue(a) })}
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="Bottom"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <PaddingIcon side="left" />
            <DropdownWithInput
              getSize={(a) => handleSizeOfElement({ paddingLeft: parseSizeValue(a) })}
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="Left"
              className="right-dashboard-dropdown"
            />
          </span>
          <span className="rightDashboard-span">
            <PaddingIcon />
            <DropdownWithInput
              getSize={(a) =>
                handleSizeOfElement({
                  paddingTop: parseSizeValue(a),
                  paddingRight: parseSizeValue(a),
                  paddingBottom: parseSizeValue(a),
                  paddingLeft: parseSizeValue(a),
                })
              }
              options={marginAndPaddingOption}
              alignArrow="right"
              defaultselected="All sides"
              className="right-dashboard-dropdown"
            />
          </span>
        </Accordion>
        <Divider color="#ffffff61" />
        {/* Layout */}
        <Accordion title="Layout">
          <b>Display</b>
          <Container
            width="100%"
            height="60px"
            alignItems="center"
            justifyContent="space-evenly"
            className="display-icon-container"
            border="none"
          >
            <span
              className="right-side-display-icons"
              onClick={() => console.log("block")}
            >
              <DisplayBlockIcon />
            </span>
            <span
              className="right-side-display-icons"
              onClick={() => console.log("inlineblock")}
            >
              <DisplayInlineBlockIcon />
            </span>
            <span
              className="right-side-display-icons"
              onClick={() => console.log("inline")}
            >
              <DisplayInlineIcon />
            </span>
            <span
              className="right-side-display-icons"
              onClick={() => console.log("flex")}
            >
              <DisplayFlexIcon />
            </span>
            <span
              className="right-side-display-icons"
              onClick={() => console.log("inline flex")}
            >
              <DisplayInlineFlexIcon />
            </span>
          </Container>
          <b>Direction</b>
          <Container
            width="100%"
            height="60px"
            alignItems="center"
            justifyContent="space-evenly"
            className="display-icon-container"
            border="none"
          >
            <Button
              width="90px"
              fontSize={15}
              className="flexDirection-buttons"
            >
              Row
            </Button>
            <Button
              width="90px"
              fontSize={15}
              className="flexDirection-buttons"
            >
              Column
            </Button>
            <Button
              width="90px"
              fontSize={15}
              className="flexDirection-buttons"
            >
              Row
            </Button>
          </Container>
        </Accordion>
      </div>
    </Container>
  );
}
