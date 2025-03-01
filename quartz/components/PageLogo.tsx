import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Logo: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  
  return (
    <div class="logo-container">
      <a href={baseDir}>
        <img src={`${baseDir}/static/logo.png`} alt="Site Logo" class="site-logo" />
      </a>
    </div>
  )
}

Logo.css = `
.logo-container {
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.site-logo {
  max-width: 200px;
  height: auto;
}
`

export default (() => Logo) satisfies QuartzComponentConstructor