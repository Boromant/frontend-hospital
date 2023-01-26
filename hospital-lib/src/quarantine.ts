import {PatientsRegister} from './patientsRegister';

export class Quarantine {

    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';

    private patients: PatientsRegister;
    private drugs: Array<string>;

    constructor(patients: PatientsRegister) {
        this.patients = patients;
        this.drugs = [];
    }

    public setDrugs(drugs: Array<string>): void {
        this.drugs = drugs;
    }

    public wait40Days(): void {
        // Init booleans
        const aspirin = this.drugs.includes('As');
        const antibiotic = this.drugs.includes('An');
        const insulin = this.drugs.includes('I');
        const paracetamol = this.drugs.includes('P');

        // Aspirin and Paracetamol interactions
        if(aspirin && paracetamol) {
            let sum = 0;
            for(let key in this.patients){
                sum += this.patients[key];
                this.patients[key] = 0;
            }
            this.patients['X'] = sum;
        }
        else if(aspirin || paracetamol){
            this.patients['H'] += this.patients['F'];
            this.patients['F'] = 0;
        }

        // Insulin and Antibiotic interactions
        if(insulin && antibiotic){
            this.patients['F'] += this.patients['H'];
            this.patients['H'] = 0;
        }
        if(!insulin){
            this.patients['X'] += this.patients['D'];
            this.patients['D'] = 0;
        }
        if(antibiotic) {
            this.patients['H'] += this.patients['T'];
            this.patients['T'] = 0;
        }
    }

    public report(): PatientsRegister {
        return this.patients;
    }
}
