import React, { useState } from "react";
import Container from "../customModules/components/Container";
import Dropdown from "../customModules/components/Dropdown";
import Accordion from "../customModules/components/Accordion";
import SearchBar from "../customModules/components/SearchBar";
import ColorFillIcon from "../utils/icons/ColorFillIcon";
import SettingsIcon from "../utils/icons/SettingsIcon";
import Divider from "../customModules/components/Divider";
import BorderRadius from "../utils/icons/BorderRadius";
import TypograpyIcon from "../utils/icons/TypograpyIcon";
import metricsData from "../DATA/leftSectionData/metricsData.json";
import typographyData from "../DATA/leftSectionData/typographyData.json";
import CustomColorPicker from "../customModules/components/CustomColorPicker";
import { useDispatch, useSelector } from "react-redux";
import { updateThemeColor } from "../../store/reducer/themeColorReducer";
import { updateBody } from "../../store/reducer/bodyReducer";
import { updateComponent } from "../../store/reducer/componentsReducer";

export default function LeftSection() {
  const [searchValue, setSearchValue] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { themeColor, bodyColor, compnentsColor } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleColorPickerThemeColor = (c, item, index) => {
    setShowColorPicker(!showColorPicker);
    const newitem = { ...item };
    newitem.color = c;
    dispatch(updateThemeColor({ newitem: newitem, index: index }));
  };
  const handleColorPickerBody = (c, item, index) => {
    setShowColorPicker(!showColorPicker);
    const newitem = { ...item };
    newitem.color = c;
    dispatch(updateBody({ newitem: newitem, index: index }));
  };
  const handleColorPickerComponent = (c, item, index) => {
    setShowColorPicker(!showColorPicker);
    const newitem = { ...item };
    newitem.color = c;
    dispatch(updateComponent({ newitem: newitem, index: index }));
  };
  return (
    <Container height="99.65vh" width="17.5vw" flexDirection="column">
      <Container
        height="50px"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <b>THEME STYLES</b>
        <Container height="50px" alignItems="center" border="none">
          <Dropdown
            defaultselected={<ColorFillIcon color="gray" />}
            iconDirection="end"
          />
          <SettingsIcon />
        </Container>
      </Container>
      <SearchBar value={searchValue} onChange={handleSearchChange} />
      <Container
        height="99.65vh"
        width="17.5vw"
        flexDirection="column"
        overflowY="scroll"
        border="none"
        className="accordion-drop-p"
      >
        <Accordion title="Metrics">
          {metricsData.map((item) => (
            <p className="accrdion-p">
              <div className="accordion-menu-icon">
                <BorderRadius width={24} height={24} />
              </div>

              <b>${item.lable}</b>
              <span>{item.value}</span>
            </p>
          ))}
        </Accordion>
        <Divider color="#ffffff61" />
        <Accordion title="Typographies">
          {typographyData.map((item) => (
            <p className="accrdion-p">
              <div className="accordion-menu-icon">
                <TypograpyIcon width={24} height={24} />
              </div>
              <b>${item.lable}</b>
              <span>{item.value}</span>
            </p>
          ))}
        </Accordion>
        <Divider color="#ffffff61" />
        <Accordion title="Colors">
          <p className="color-heading">THEME COLORS</p>
          {themeColor?.map((item, index) => (
            <p className="accrdion-p">
              <CustomColorPicker
                defaultColor={item.color}
                width="30px"
                height="30px"
                onChange={(color) =>
                  handleColorPickerThemeColor(color, item, index)
                }
              />
              <b>${item.lable}</b>
              <span>{item.color}</span>
            </p>
          ))}
          <p className="color-heading">BODY</p>
          {bodyColor?.map((item, index) => (
            <p className="accrdion-p">
              <CustomColorPicker
                defaultColor={item.color}
                width="30px"
                height="30px"
                onChange={(color) => handleColorPickerBody(color, item, index)}
              />
              <b>${item.lable}</b>
              <span>{item.color}</span>
            </p>
          ))}
          <p className="color-heading">COMPONENTS</p>
          {compnentsColor?.map((item, index) => (
            <p className="accrdion-p">
              <CustomColorPicker
                defaultColor={item.color}
                width="30px"
                height="30px"
                onChange={(color) =>
                  handleColorPickerComponent(color, item, index)
                }
              />
              <b>${item.lable}</b>
              <span>{item.color}</span>
            </p>
          ))}
        </Accordion>
      </Container>
    </Container>
  );
}
