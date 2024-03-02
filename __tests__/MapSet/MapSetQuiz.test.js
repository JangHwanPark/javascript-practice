const assert = require('assert');
const {unique1} = require('../../js/Note-Map_And_Set/MapSetQuiz');

describe("unique", () => {
    it("removes non-unique elements", () => {
        let strings = ["Hare", "Krishna", "Hare", "Krishna",
            "Krishna", "Krishna", "Hare", "Hare", ":-O"
        ];

        assert.deepEqual(unique1(strings), ["Hare", "Krishna", ":-O"]);
    });

    it("does not change the source array", () => {
        let strings = ["Krishna", "Krishna", "Hare", "Hare"];
        unique1(strings);
        assert.deepEqual(strings, ["Krishna", "Krishna", "Hare", "Hare"]);
    });
});