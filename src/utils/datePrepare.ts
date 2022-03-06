import { IYear } from "types/IYear";

const datePrepare = (value: string): IYear => {
    const newDate = new Date(value);
    return { year: newDate.getFullYear()}
}

export default datePrepare;