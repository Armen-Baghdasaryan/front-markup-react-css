import "./CustomSelect.css";
import chevronB from "./assets/chevronB.svg";
import CustomOption from "./CustomOption";

const CustomSelect = ({ item, mobSize }) => {
  return (
    <div className="selectContainer">
      <div className="selectTitleCont">
        <span className="selectTitle">{item.title}</span>
        {item.isSelectItem && <img alt="Img" src={chevronB} />}
      </div>

      {mobSize && <div className="customHrMob"></div>}

      {item.isSelectItem && (
        <div className="optionsSection">
          <div className="optionsContainer">
            <CustomOption text={`${item.title} Header`} />
            <div className="customHr"></div>
            <CustomOption text={`${item.title} Layout`} />
            <div className="customHr"></div>
            <CustomOption text={`Share Buttons`} />
            <div className="customHr"></div>
            <CustomOption text={`Galery ${item.title}`} />
            <div className="customHr"></div>
            <CustomOption text={`Video ${item.title}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
