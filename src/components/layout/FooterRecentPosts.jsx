import FooterSectionTitle from './FooterSectionTitle.jsx';
import { articles, articleThemes } from '../../data/portfolio.js';

function FooterPost({ title, theme }) {
  return (
    <li className="footer-post">
      <div className={`footer-post-image bg-gradient-to-br ${theme}`} aria-hidden="true">
        <span>AI</span>
      </div>
      <div className="footer-post-details">
        <span className="footer-post-title">{title}</span>
        <span className="footer-post-category">AI Insights</span>
      </div>
    </li>
  );
}

function FooterRecentPosts() {
  return (
    <section className="footer-column" aria-labelledby="footer-posts-title">
      <FooterSectionTitle>
        <span id="footer-posts-title">Recent Posts</span>
      </FooterSectionTitle>
      <ul className="footer-post-list">
        {articles.slice(1, 3).map((title, index) => (
          <FooterPost
            key={title}
            title={title}
            theme={articleThemes[index + 1]}
          />
        ))}
      </ul>
    </section>
  );
}

export default FooterRecentPosts;
