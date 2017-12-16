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

exports.posologies = [
    { period: '7 days', interval: '3 n\' 3', dosage: '2000 mg', technique: 'oral', recommendedFor: 'above 18' },
    { period: '14 days', interval: '12 n\' 12', dosage: '20 mg', technique: 'injection' }
];

exports.presentations = [
    { form: 'blister', concentration: '200mg', packageQuantity: 33, drug: 1, posologies: [1] },
    { form: 'xarope', concentration: '300ml', packageQuantity: 22, drug: 2, posologies: [1, 2] }
];