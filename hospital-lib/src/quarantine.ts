import {PatientsRegister} from './patientsRegister';

export class Quarantine {

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
                sum += this.patients.map.get(key);
                this.patients.map.set(key, 0);
            }
            this.patients.map.set('X', sum);
        }
        else if(aspirin || paracetamol){
            this.setPatientStatus(this.patients.map, 'H', 'F');
        }

        // Insulin and Antibiotic interactions
        if(insulin && antibiotic){
            this.setPatientStatus(this.patients.map, 'F', 'H');
        }
        if(!insulin){
            this.setPatientStatus(this.patients.map, 'X', 'D');
        }
        if(antibiotic) {
            this.setPatientStatus(this.patients.map, 'H', 'T');
        }
    }
    private setPatientStatus(map: Map<string, number>, status1: string, status2: string){
        map.set(status1, map.get(status2));
        map.set(status2, 0);
    }

    public report(): Map<string, number> {
        return this.patients.map;
    }
}
