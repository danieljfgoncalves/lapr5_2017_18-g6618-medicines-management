/**
 * Mock objects for testing purposes.
 */

exports.medicines = [
    { name: "Ativan" },
    { name: "Biaxin" },
    { name: "Toprol" }
];

exports.drugs = [
    { name: "Atorvastatin", medicines: [1,2] },
    { name: "Prozac", medicines: [3] },
    { name: "Reglan", medicines: [2,3] }
];

exports.presentations = [
    { form: 'blister', concentration: '200mg', packageQuantity:33, drug:1 },
    { form: 'xarope', concentration: '300ml', packageQuantity:22, drug:2 }
];