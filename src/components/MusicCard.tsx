interface Props {
    musicImage: string;
    musicTitle: string;
}

const MusicCard = ({ musicImage, musicTitle }: Props) => {
    return (
        <div className='music-list__item d-flex flex-column justify-content-around align-items-center'>
            <img className='w-75' src={musicImage} />
            <p className='w-50 text-center fw-bolder font-monospace'>
                {musicTitle}
            </p>
        </div>
    );
};

export default MusicCard;
