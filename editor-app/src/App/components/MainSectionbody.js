import React from "react";
import Container from "../customModules/components/Container";
import Button from "../customModules/components/Button";
import StarIcon from "../utils/icons/StarIcon";
import { useDispatch, useSelector } from "react-redux";
import { updateselected } from "../../store/reducer/selectedReducer";

export default function MainSectionbody({ handleSelectedButtonProp }) {
  const { themeColor, bodyColor, compnentsColor, text, size, size2, selected ,selectedBackgroundColor,selectedFontColor} =
    useSelector((state) => state);
  const dispatch = useDispatch();

  const handleButtonSelect = (e, index, key) => {
    e.stopPropagation();
    handleSelectedButtonProp(e.target, index, key);
    dispatch(updateselected({ index: index, key: key }));
  };

  return (
    <Container width="100%" height="60vh" bg="#d3d3d34d"  justifyContent='center' className="mainSectionBody">
      <Container
        width="fit-content"
        height="fit-content"
        className="mainSectionbody"
        bg="#fff"
        border="none"
      >
        <Container
          width="fit-content"
          height="fit-content"
          className="main-sec-editor"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          border="none"
        >
          <p>SOLID/SECONDARY</p>
          <table>
            <tbody>
              {size?.map((item, index) => {
                return (
                  <tr className={`ltr-${index} ${item.label}`}>
                    <td>
                      <p>{item.label}</p>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => handleButtonSelect(e, index, 1)}
                        bg={index === 3 ? themeColor[selectedBackgroundColor].color : "white"}
                        color={index === 3 ? bodyColor[selectedFontColor].color : "#000000"}
                        fontSize="15px"
                        width={item.width}
                        height={item.height}
                        paddingTop={item.paddingTop}
                        paddingRight={item.paddingRight}
                        paddingBottom={item.paddingBottom}
                        paddingLeft={item.paddingLeft}
                        marginTop={item.marginTop}
                        marginRight={item.marginRight}
                        marginBottom={item.marginBottom}
                        marginLeft={item.marginLeft}
                      >
                        {text.text}
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => handleButtonSelect(e, index, 1)}
                        bg={index === 3 ? themeColor[selectedBackgroundColor].color : "white"}
                        color={index === 3 ? bodyColor[selectedFontColor].color : "#000000"}
                        fontSize="15px"
                        width={item.width}
                        height={item.height}
                        paddingTop={item.paddingTop}
                        paddingRight={item.paddingRight}
                        paddingBottom={item.paddingBottom}
                        paddingLeft={item.paddingLeft}
                        marginTop={item.marginTop}
                        marginRight={item.marginRight}
                        marginBottom={item.marginBottom}
                        marginLeft={item.marginLeft}
                      >
                        <StarIcon
                          size={15}
                          color={index === 3 ? bodyColor[selectedFontColor].color : "#000000"}
                        />
                        {text.text}
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => handleButtonSelect(e, index, 1)}
                        bg={index === 3 ? themeColor[selectedBackgroundColor].color : "white"}
                        color={index === 3 ? bodyColor[selectedFontColor].color : "#000000"}
                        fontSize="15px"
                        width={item.width}
                        height={item.height}
                        paddingTop={item.paddingTop}
                        paddingRight={item.paddingRight}
                        paddingBottom={item.paddingBottom}
                        paddingLeft={item.paddingLeft}
                        marginTop={item.marginTop}
                        marginRight={item.marginRight}
                        marginBottom={item.marginBottom}
                        marginLeft={item.marginLeft}
                      >
                        <StarIcon
                          size={15}
                          color={index === 3 ? bodyColor[selectedFontColor].color : "#000000"}
                        />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
        <Container
          width="50%"
          height="100%"
          className="main-sec-editor"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          border="none"
        >
          <p>SOLID/PRIMARY</p>
          <table>
            <tbody>
              {size2?.map((item, index) => {
                return (
                  <tr className={`rtr-${index} ${item.label}`}>
                    <td>
                      <p>{item.label}</p>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => handleButtonSelect(e, index, 2)}
                        bg={themeColor[selectedBackgroundColor].color}
                        fontSize="15px"
                        width={item.width}
                        height={item.height}
                        paddingTop={item.paddingTop}
                        paddingRight={item.paddingRight}
                        paddingBottom={item.paddingBottom}
                        paddingLeft={item.paddingLeft}
                        marginTop={item.marginTop}
                        marginRight={item.marginRight}
                        marginBottom={item.marginBottom}
                        marginLeft={item.marginLeft}
                        color={bodyColor[selectedFontColor].color}
                      >
                        {text.text}
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => handleButtonSelect(e, index, 2)}
                        bg={themeColor[selectedBackgroundColor].color}
                        fontSize="15px"
                        width={item.width}
                        height={item.height}
                        paddingTop={item.paddingTop}
                        paddingRight={item.paddingRight}
                        paddingBottom={item.paddingBottom}
                        paddingLeft={item.paddingLeft}
                        marginTop={item.marginTop}
                        marginRight={item.marginRight}
                        marginBottom={item.marginBottom}
                        marginLeft={item.marginLeft}
                        color={bodyColor[selectedFontColor].color}
                      >
                        <StarIcon size={15} color={bodyColor[selectedFontColor].color} />
                        {text.text}
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => handleButtonSelect(e, index, 2)}
                        bg={themeColor[selectedBackgroundColor].color}
                        fontSize="15px"
                        width={item.width}
                        height={item.height}
                        paddingTop={item.paddingTop}
                        paddingRight={item.paddingRight}
                        paddingBottom={item.paddingBottom}
                        paddingLeft={item.paddingLeft}
                        marginTop={item.marginTop}
                        marginRight={item.marginRight}
                        marginBottom={item.marginBottom}
                        marginLeft={item.marginLeft}
                        color={bodyColor[selectedFontColor].color}
                      >
                        <StarIcon size={15} color={bodyColor[selectedFontColor].color} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      </Container>
    </Container>
  );
}
