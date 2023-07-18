import React from 'react';
import { ButtonContainer } from '../../../theme/Buttons';
import styles from './styles.module.scss';
import { LinkButton } from '/src/theme/Buttons';
import Link from '@docusaurus/Link';

export default function HomepageIntegrations() {
  return (
    <div className={styles.integrationsSection}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.right}>
            <h2>Integrations</h2>
            <p>
              Besides Weaviate's capabilities to bring your own vectors, you can
              also choose one of Weaviate's modules with out-of-the-box support
              for vectorization. You can also pick from a wide variety of
              well-known neural search frameworks with Weaviate integrations.
            </p>
            {/*    <ButtonContainer position='left'>
            <LinkButton link="/developers/weaviate/modules" newTab={false}>Learn about Weaviate modules</LinkButton>
          </ButtonContainer> */}
          </div>
        </div>
      </div>

      <div className={styles.integrationsLogos} id={'interLogos'}>
        <div className={styles.inside}>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-openai">
            <div className={styles.logoBg}>
              <span className={styles.logoAI} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-huggingface">
            <div className={styles.logoBg}>
              <span className={styles.logoH} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/client-libraries/python#neural-search-frameworks">
            <div className={styles.logoBg}>
              <span className={styles.logoJ} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/reader-generator-modules/qna-transformers#introduction">
            <div className={styles.logoBg}>
              <span className={styles.logoD} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-cohere">
            <div className={styles.logoBg}>
              <span className={styles.logoCo} />
            </div>
          </Link>
          <Link to="https://wpsolr.com/wpsolr-demos/">
            <div className={styles.logoBg}>
              <span className={styles.logoW} />
            </div>
          </Link>
        </div>

        <div className={styles.inside}>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-openai">
            <div className={styles.logoBg}>
              <span className={styles.logoAI} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-huggingface">
            <div className={styles.logoBg}>
              <span className={styles.logoH} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/client-libraries/python#neural-search-frameworks">
            <div className={styles.logoBg}>
              <span className={styles.logoJ} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/reader-generator-modules/qna-transformers#introduction">
            <div className={styles.logoBg}>
              <span className={styles.logoD} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-cohere">
            <div className={styles.logoBg}>
              <span className={styles.logoCo} />
            </div>
          </Link>
          <Link to="https://wpsolr.com/wpsolr-demos/">
            <div className={styles.logoBg}>
              <span className={styles.logoW} />
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`${styles.integrationsLogos} ${styles.mobileIntegrations}`}
      >
        <div className={styles.inside}>
          <Link to="https://wpsolr.com/wpsolr-demos/">
            <div className={styles.logoBg}>
              <span className={styles.logoW} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-cohere">
            <div className={styles.logoBg}>
              <span className={styles.logoCo} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/reader-generator-modules/qna-transformers#introduction">
            <div className={styles.logoBg}>
              <span className={styles.logoD} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/client-libraries/python#neural-search-frameworks">
            <div className={styles.logoBg}>
              <span className={styles.logoJ} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-huggingface">
            <div className={styles.logoBg}>
              <span className={styles.logoH} />
            </div>
          </Link>

          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-openai">
            <div className={styles.logoBg}>
              <span className={styles.logoAI} />
            </div>
          </Link>
        </div>

        <div className={styles.inside}>
          <Link to="https://wpsolr.com/wpsolr-demos/">
            <div className={styles.logoBg}>
              <span className={styles.logoW} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-cohere">
            <div className={styles.logoBg}>
              <span className={styles.logoCo} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/reader-generator-modules/qna-transformers#introduction">
            <div className={styles.logoBg}>
              <span className={styles.logoD} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/client-libraries/python#neural-search-frameworks">
            <div className={styles.logoBg}>
              <span className={styles.logoJ} />
            </div>
          </Link>
          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-huggingface">
            <div className={styles.logoBg}>
              <span className={styles.logoH} />
            </div>
          </Link>

          <Link to="https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-openai">
            <div className={styles.logoBg}>
              <span className={styles.logoAI} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
