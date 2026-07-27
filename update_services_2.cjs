const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src/pages/Services.jsx");
let content = fs.readFileSync(filePath, "utf8");

const startString = `<div className="software-services-layout" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>`;
const endString = `</article>\n          </div>`;

const startIndex = content.indexOf(startString);
const endIndex = content.indexOf(endString, startIndex) + endString.length;

const replacement = `<div className="software-services-layout" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {softwareServices.map((service, serviceIndex) => (
              <article
                className="software-service-card"
                id={\`software-service-panel-\${serviceIndex}\`}
                key={service.title}
                style={{ paddingBottom: '2rem', borderBottom: serviceIndex !== softwareServices.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none' }}
              >
                <h3 style={{ fontSize: '2.5rem', color: 'var(--brand)', marginBottom: '0.5rem' }}>{service.title}</h3>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.5rem' }}>{service.headline}</h4>
                {service.description && (
                  <p className="service-topic-description" style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '2rem' }}>
                    {service.description}
                  </p>
                )}
                <div className="software-service-content-details">
                  {service.fullContent ? (
                    <div className="rich-service-layout">
                      <div className="rich-image-space">
                        <span>Image Space</span>
                      </div>
                      <div className="rich-text-content">
                        {service.fullContent}
                      </div>
                    </div>
                  ) : (
                    service.points.map((point, index) => {
                      const parts = point.split(' - ');
                      const title = parts[0];
                      const desc = parts.slice(1).join(' - ') || point;
                      const isReverse = index % 2 !== 0;

                      return (
                        <div className={\`zigzag-row \${isReverse ? 'reverse' : ''}\`} key={index}>
                          <div className="zigzag-content">
                            <h5>
                              <i className="bx bxs-check-circle"></i>
                              {title}
                            </h5>
                            <p>{desc}</p>
                          </div>
                          <div className="zigzag-image-space">
                            <span>Image Space</span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </article>
            ))}
          </div>`;

if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Services layout updated successfully.");
} else {
    console.log("Could not find start or end string.");
    console.log("startIndex:", startIndex);
    console.log("endIndex:", endIndex);
}

