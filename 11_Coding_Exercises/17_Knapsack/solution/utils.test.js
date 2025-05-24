import { filterUniqueCombinations } from "./utils";

describe("utils", () => {
  test("five items (cannot be greedy by value)", () => {
    const items = [
      [{ weight: 2, value: 20 }],
      [{ weight: 2, value: 20 }],
      [
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
      ],
    ];

    const expected = [
      [{ weight: 2, value: 20 }],
      [
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
      ],
    ];
    expect(filterUniqueCombinations(items)).toEqual(expected);
  });
});
