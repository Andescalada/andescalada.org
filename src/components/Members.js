import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const MemberGrid = ({ gridMembers }) => (
  <div className="columns is-multiline">
    {gridMembers.map((member) => (
      <div key={member.name} className="column is-4">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '100%',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage
                imageInfo={member}
              />
            </div>
          </div>
          <h3 className="title is-size-5 secondary-font mb-1">
            {member.name}
          </h3>
          <p className="has-text-weight-semibold is-size-6"> {member.position }</p>
          <p className="is-size-6">{member.brief}</p>
        </section>
      </div>
    ))}
  </div>
)


MemberGrid.propTypes = {
  gridMembers: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      brief: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}

export default MemberGrid
