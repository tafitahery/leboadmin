import { Visibility } from '@mui/icons-material';

import './widgetSm.css';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New join members</span>
      <ul className="widgetSmList">
        <li className="widgetListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Ingineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Ingineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Ingineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Ingineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Ingineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
