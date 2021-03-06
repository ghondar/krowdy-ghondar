type IFunCheckbox = (id: number, checked?: boolean) => void

export interface CardCandidateProps {
    id?: number;
    checked?: boolean;
    firstName: string;
    src?: string;
    lastName: string;
    onChangeCheckbox?: IFunCheckbox;
    colorCheckbox?: string
}
declare const CardCandidate: React.ComponentType<CardCandidateProps>;

export default CardCandidate;