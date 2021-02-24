export default class WithGradesWinnersData {
    constructor() {
        this.grade_8_participants = { //участники из 8 класса
            undefined: 0, // без диплома
            '1': 0, // диплом первой степени
            '2': 0, // второй
            '3': 0  // третьей
        }
        this.grade_9_participants = {
            undefined: 0,
            '1': 0,
            '2': 0,
            '3': 0
        }
        this.grade_10_participants = {
            undefined: 0,
            '1': 0,
            '2': 0,
            '3': 0
        }
        this.grade_11_participants = {
            undefined: 0,
            '1': 0,
            '2': 0,
            '3': 0
        }
    }
}