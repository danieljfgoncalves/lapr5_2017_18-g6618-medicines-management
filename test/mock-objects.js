/**
 * Mock objects for testing purposes.
 */

exports.medicines = [
    { name: "Ativan" },
    { name: "Biaxin" },
    { name: "Toprol" },
    { name: "Ultracet" },
    { name: "Zanamivir" }
];

exports.drugs = [
    { name: "Atorvastatin", medicines: [1,2] },
    { name: "Prozac", medicines: [3] },
    { name: "Reglan", medicines: [4,5] }
];

exports.posologies = [
    { period: '7 days', interval: '3 n\' 3', dosage: '2000 mg', technique: 'oral', recommendedFor: 'above 18' },
    { period: '30 days', interval: '18 n\' 18', dosage: '10 mg', technique: 'injection' },
    { period: '14 days', interval: '12 n\' 12', dosage: '20 mg', technique: 'injection' }
];

exports.comments = [
    { physician: '5a35cc23ceee9e24764ba33c', text: 'allergy' },
    { physician: '5a35cc23ceee9e24764ba44c', text: 'itchy' },
    { physician: '5a35cc23ceee9e24764ba55c', text: 'nausea' },
    { physician: '5a35cc23ceee9e24764ba66c', text: 'upset stomach' }
]

exports.presentations = [
    { form: 'blister', concentration: '200mg', packageQuantity: 33, drug: 1, posologies: [1], comments: [1, 2] },
    { form: 'xarope', concentration: '300ml', packageQuantity: 22, drug: 2, posologies: [2, 3], comments: [3, 4] }
];