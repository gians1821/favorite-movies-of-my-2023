import { SwiperContainer } from "./SwiperContainer"
import './RankingSection.css'

function RankingSection( { name, data } ) {
    return (
        <section className="ranking">
            <h2 className="ranking-title">{name}</h2>
            <section className="ranking-section">
                <SwiperContainer data={data} />
            </section>
        </section>
    )
}

export { RankingSection }