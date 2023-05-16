import React, { useEffect, useState } from "react";
import Container from "../customModules/components/Container";
import MinimiseIcon from "../utils/icons/MinimiseIcon";
import Button from "../customModules/components/Button";
import { useSelector } from "react-redux";

export default function MainSectionLivePreview({ preview }) {
  const [item, setItem] = useState("");
  const { themeColor, bodyColor, compnentsColor, text, size, size2,selectedBackgroundColor,selectedFontColor } =
    useSelector((state) => state);

  useEffect(() => {
    handleStyleForLivePreview(preview);
  }, [preview]);
  const handleStyleForLivePreview = ({ e, index, key }) => {
    switch (key) {
      case 1:
        setItem(size[index]);
        break;
      case 2:
        setItem(size2[index]);
        break;
    }
  };
  return (
    <Container width="100%" height="40vh" border="none" flexDirection="column">
      <Container
        width="100%"
        height="40px"
        alignItems="center"
        justifyContent="space-between"
      >
        <b>LIVE PREVIEW</b>
        <MinimiseIcon />
      </Container>
      <Container
        width="100%"
        height="44vh"
        alignItems="center"
        justifyContent="center"
      >
        {item && (
          <Button
            bg={themeColor[selectedBackgroundColor].color}
            color={bodyColor[selectedFontColor].color}
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
            filter={item.filter}
          >
            {text.text}
          </Button>
        )}
      </Container>
    </Container>
  );
}
