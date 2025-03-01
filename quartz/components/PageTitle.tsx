import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class="title-with-logo">
      {/* Logo container added above the title */}
      <div class="logo-container">
        <img src={`${baseDir}/static/logo.png`} alt="Site Logo" class="site-logo" />
      </div>
      
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}

.title-with-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-container {
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.site-logo {
  max-width: 50px;
  height: auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
