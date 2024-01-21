import { useState } from "react";
import CustomSelect from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const ConfigureChart = ({trace, dataHeaderOptions, onConfigurationChage}) => {
  // const [horizontalAxis, setHorizontalAxis] = useState(null);
  // const [verticalAxis, setVerticalAxis] = useState(null);

  const handleHorizontalAxisChange = (selectedOption) => {
    // setHorizontalAxis(selectedOption);
    onConfigurationChage("horizontalAxis", selectedOption)
  };

  const handleVerticalAxisChange = (selectedOptions) => {
    // setVerticalAxis(selectedOptions);
    onConfigurationChage("verticalAxis", selectedOptions)
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full max-w-md items-center justify-between">
        <Label htmlFor="name">Horizontal Axis</Label>
        <CustomSelect
          isMulti={false}
          closeMenuOnSelect={true}
          options={dataHeaderOptions}
          onChange={handleHorizontalAxisChange}
          value={trace.map((item) => item['xObj'])}
        />
      </div>
      <div className="flex w-full max-w-md items-center justify-between">
        <Label htmlFor="name">Vertical Axis</Label>
        <CustomSelect
          isMulti={true}
          closeMenuOnSelect={false}
          options={dataHeaderOptions}
          onChange={handleVerticalAxisChange}
          value={trace.map((item) => item['yObj'])}
        />
      </div>
    </div>
  );
};

export default ConfigureChart;
