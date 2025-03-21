//components
import Link from './Link';
//icons
import { GiSpanner } from 'react-icons/gi';

function ExploreGrid() {
    return (
        <article className='explore-grid'>
            <nav>
                <ul>
                    <li>
                        <Link href='/mechanical-inventions' className='explore-card'>
                            <p>Mechanical Inventions</p>
                            <GiSpanner className='explore-icon'/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </article>
    )
}

export default ExploreGrid;
