export interface Music {
    music: any[];
    setMusic: React.Dispatch<React.SetStateAction<any[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}