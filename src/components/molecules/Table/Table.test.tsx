import { renderWithTheme } from "../../../utils/tests/helpers";
import { Table } from "./Table";

interface IData {
  bracket: string;
  rate: string;
  tax: string;
}
const columns = [
  {
    key: "bracket",
    title: "Tax Bracket",
    width: 150,
  },
  {
    key: "rate",
    title: "Tax Rate",
    width: 150,
  },
  {
    key: "tax",
    title: "Tax Per Band",
    width: 150,
  },
];

const data: IData[] = [];

describe("<Table />", () => {
  it("should match the snapshot", () => {
    const { container } = renderWithTheme(
      <Table columns={columns} data={data} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
