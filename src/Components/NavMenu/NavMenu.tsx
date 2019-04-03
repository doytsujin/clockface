// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {NavMenuItem} from './NavMenuItem'
import {NavMenuSubItem} from './NavMenuSubItem'

// Styles
import './NavMenu.scss'

interface Props {
  /** Class name for custom styles */
  className?: string
  /** NavMenu is hidden in presentation mode */
  presentationMode?: boolean
  /** Test ID for Integration Tests */
  testID: string
}

export class NavMenu extends PureComponent<Props> {
  public static defaultProps = {
    testID: 'nav-menu',
  }

  public static Item = NavMenuItem
  public static SubItem = NavMenuSubItem

  constructor(props: Props) {
    super(props)
  }

  public render() {
    const {children, testID, presentationMode} = this.props

    if (presentationMode) {
      return null
    }

    const className = classnames('nav', {
      [`${this.props.className}`]: this.props.className,
      'presentation-mode': presentationMode,
    })

    return (
      <nav className={className} data-testid={testID}>
        {children}
      </nav>
    )
  }
}
