import MySelect from "@/components/MySelect";
import { Checkbox } from "@/components/ui/checkbox"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"



// Data
import { selects } from "./componentsData";

export const charts = {
    area: {
        curve: true,
        // fill: true,
        // legend: true,
        markers: true,
        toolbar: true,
        // width: true
    }
}

export const components = {
    curve: MySelect,
    markers: Checkbox,
    width: Slider,
    toolbar: Checkbox,
};

export const componentProps = {
    curve: {object: selects, handleChange: () => {} }
}