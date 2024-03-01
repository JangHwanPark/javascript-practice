// https://ko.javascript.info/map-set
function unique(arr) {
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }

    return set;
}

function unique1(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// `Hare, Krishna, :-O`만 출력되어야 합니다.
console.log(unique(values));
console.log(unique1(values));

module.exports = {unique1};