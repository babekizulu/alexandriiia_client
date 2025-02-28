//components
import Link from './Link';

function QuickTools() {
  return (
    <div className="quick-tools">
        <nav>
            <ul>
                <li>
                    <button>View 1</button>
                </li>
                <li>
                    <button>View 2</button>
                </li>
                <li>
                    <button>View 3</button>
                </li>
                <li>
                    <Link href="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default QuickTools;
