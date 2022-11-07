//@ts-nocheck

import * as AlertStory from '@components/Alert/Alert.stories'
import * as AnchorStory from '@components/Anchor/Anchor.stories'
import * as ButtonStory from '@components/Button/Button.stories'
import * as ButtonGroupStory from '@components/ButtonGroup/ButtonGroup.stories'
import * as CardStory from '@components/Card/Card.stories'
import * as CheckboxStory from '@components/Checkbox/Checkbox.stories'
import * as CollapsibleStory from '@components/Collapsible/Collapsible.stories'
import * as ContainerStory from '@components/Container/Container.stories'
import * as DatePickerStory from '@components/DatePicker/DatePicker.stories'
import * as DropdownStory from '@components/Dropdown/Dropdown.stories'
// import * as FlexBoxStory from '@components/FlexBox/FlexBox.stories'
import * as FocusTrapStory from '@components/FocusTrap/FocusTrap.stories'
// import * as FormSystemStory from '@components/FormSystem/FormSystem.stories'
import * as HintStory from '@components/Hint/Hint.stories'
import * as IconStory from '@components/Icon/Icon.stories'
import * as IconButtonStory from '@components/IconButton/IconButton.stories'
import * as ImageStory from '@components/Image/Image.stories'
import * as ImageGalleryStory from '@components/ImageGallery/ImageGallery.stories'
import * as InputStory from '@components/Input/Input.stories'
import * as InputGroupStory from '@components/InputGroup/InputGroup.stories'
import * as LazyLoadStory from '@components/LazyLoad/LazyLoad.stories'
import * as ListStory from '@components/List/List.stories'
import * as ListItemStory from '@components/ListItem/ListItem.stories'
import * as MapsStory from '@components/Maps/Maps.stories'
import * as MenuStory from '@components/Menu/Menu.stories'
import * as MessageStory from '@components/Message/Message.stories'
import * as ModalStory from '@components/Modal/Modal.stories'
import * as OverlayStory from '@components/Overlay/Overlay.stories'
import * as PaginationStory from '@components/Pagination/Pagination.stories'
import * as PaperStory from '@components/Paper/Paper.stories'
import * as PillStory from '@components/Pill/Pill.stories'
import * as PopoverStory from '@components/Popover/Popover.stories'
// import * as PortalStory from '@components/Portal/Portal.stories'
import * as RadioStory from '@components/Radio/Radio.stories'
import * as SelectStory from '@components/Select/Select.stories'
import * as SheetStory from '@components/Sheet/Sheet.stories'
// import * as SkeletonStory from '@components/Skeleton/Skeleton.stories'
import * as SliderStory from '@components/Slider/Slider.stories'
import * as SubMenuStory from '@components/SubMenu/SubMenu.stories'
import * as SwitchButtonStory from '@components/SwitchButton/SwitchButton.stories'
// import * as TableStory from '@components/Table/Table.stories'
import * as TagStory from '@components/Tag/Tag.stories'
import * as TagsInputStory from '@components/TagsInput/TagsInput.stories'
import * as TextareaStory from '@components/Textarea/Textarea.stories'
import * as TimePickerStory from '@components/TimePicker/TimePicker.stories'
import * as UploadButtonStory from '@components/UploadButton/UploadButton.stories'
import * as VideoStory from '@components/Video/Video.stories'

const componentsStructure = [
    {
        id: 'Alert',
        label: 'Alert',
        props: AlertStory.default.args || AlertStory.BasicStory.args || {},
        component: AlertStory.BasicStory
    },
    {
        id: 'Anchor',
        label: 'Anchor',
        props: AnchorStory.default.args || AnchorStory.BasicStory.args || {},
        component: AnchorStory.BasicStory
    },
    {
        id: 'Button',
        label: 'Button',
        props: ButtonStory.default.args || ButtonStory.BasicStory.args || {},
        component: ButtonStory.BasicStory
    },
    {
        id: 'ButtonGroup',
        label: 'ButtonGroup',
        props: ButtonGroupStory.default.args || ButtonGroupStory.BasicStory.args || {},
        component: ButtonGroupStory.BasicStory
    },
    {
        id: 'Card',
        label: 'Card',
        props: CardStory.default.args || CardStory.BasicStory.args || {},
        component: CardStory.BasicStory
    },
    {
        id: 'Checkbox',
        label: 'Checkbox',
        props: CheckboxStory.default.args || CheckboxStory.BasicStory.args || {},
        component: CheckboxStory.BasicStory
    },
    {
        id: 'Collapsible',
        label: 'Collapsible',
        props: CollapsibleStory.default.args || CollapsibleStory.BasicStory.args || {},
        component: CollapsibleStory.BasicStory
    },
    {
        id: 'Container',
        label: 'Container',
        props: ContainerStory.default.args || ContainerStory.BasicStory.args || {},
        component: ContainerStory.BasicStory
    },
    {
        id: 'DatePicker',
        label: 'DatePicker',
        props: DatePickerStory.default.args || DatePickerStory.BasicStory.args || {},
        component: DatePickerStory.BasicStory
    },
    {
        id: 'Dropdown',
        label: 'Dropdown',
        props: DropdownStory.default.args || DropdownStory.BasicStory.args || {},
        component: DropdownStory.BasicStory
    },
    // {
    //     id: 'FlexBox',
    //     label: 'FlexBox',
    //     props: FlexBoxStory.default.args || FlexBoxStory.BasicStory.args || {},
    //     component: FlexBoxStory.BasicStory
    // },
    {
        id: 'FocusTrap',
        label: 'FocusTrap',
        props: FocusTrapStory.default.args || FocusTrapStory.BasicStory.args || {},
        component: FocusTrapStory.BasicStory
    },
    // {
    //     id: 'FormSystem',
    //     label: 'FormSystem',
    //     props: FormSystemStory.default.args || FormSystemStory.BasicStory.args || {},
    //     component: FormSystemStory.BasicStory
    // },
    {
        id: 'Hint',
        label: 'Hint',
        props: HintStory.default.args || HintStory.BasicStory.args || {},
        component: HintStory.BasicStory
    },
    {
        id: 'Icon',
        label: 'Icon',
        props: IconStory.default.args || IconStory.BasicStory.args || {},
        component: IconStory.BasicStory
    },
    {
        id: 'IconButton',
        label: 'IconButton',
        props: IconButtonStory.default.args || IconButtonStory.BasicStory.args || {},
        component: IconButtonStory.BasicStory
    },
    {
        id: 'Image',
        label: 'Image',
        props: ImageStory.default.args || ImageStory.BasicStory.args || {},
        component: ImageStory.BasicStory
    },
    {
        id: 'ImageGallery',
        label: 'ImageGallery',
        props: ImageGalleryStory.default.args || ImageGalleryStory.BasicStory.args || {},
        component: ImageGalleryStory.BasicStory
    },
    {
        id: 'Input',
        label: 'Input',
        props: InputStory.default.args || InputStory.BasicStory.args || {},
        component: InputStory.BasicStory
    },
    {
        id: 'InputGroup',
        label: 'InputGroup',
        props: InputGroupStory.default.args || InputGroupStory.BasicStory.args || {},
        component: InputGroupStory.BasicStory
    },
    {
        id: 'LazyLoad',
        label: 'LazyLoad',
        props: LazyLoadStory.default.args || LazyLoadStory.BasicStory.args || {},
        component: LazyLoadStory.BasicStory
    },
    {
        id: 'List',
        label: 'List',
        props: ListStory.default.args || ListStory.BasicStory.args || {},
        component: ListStory.BasicStory
    },
    {
        id: 'ListItem',
        label: 'ListItem',
        props: ListItemStory.default.args || ListItemStory.BasicStory.args || {},
        component: ListItemStory.BasicStory
    },
    {
        id: 'Maps',
        label: 'Maps',
        props: MapsStory.default.args || MapsStory.BasicStory.args || {},
        component: MapsStory.BasicStory
    },
    {
        id: 'Menu',
        label: 'Menu',
        props: MenuStory.default.args || MenuStory.BasicStory.args || {},
        component: MenuStory.BasicStory
    },
    {
        id: 'Message',
        label: 'Message',
        props: MessageStory.default.args || MessageStory.BasicStory.args || {},
        component: MessageStory.BasicStory
    },
    {
        id: 'Modal',
        label: 'Modal',
        props: ModalStory.default.args || ModalStory.BasicStory.args || {},
        component: ModalStory.BasicStory
    },
    {
        id: 'Overlay',
        label: 'Overlay',
        props: OverlayStory.default.args || OverlayStory.BasicStory.args || {},
        component: OverlayStory.BasicStory
    },
    {
        id: 'Pagination',
        label: 'Pagination',
        props: PaginationStory.default.args || PaginationStory.BasicStory.args || {},
        component: PaginationStory.BasicStory
    },
    {
        id: 'Paper',
        label: 'Paper',
        props: PaperStory.default.args || PaperStory.BasicStory.args || {},
        component: PaperStory.BasicStory
    },
    {
        id: 'Pill',
        label: 'Pill',
        props: PillStory.default.args || PillStory.BasicStory.args || {},
        component: PillStory.BasicStory
    },
    {
        id: 'Popover',
        label: 'Popover',
        props: PopoverStory.default.args || PopoverStory.BasicStory.args || {},
        component: PopoverStory.BasicStory
    },
    // {
    //     id: 'Portal',
    //     label: 'Portal',
    //     props: PortalStory.default.args || PortalStory.BasicStory.args || {},
    //     component: PortalStory.BasicStory
    // },
    {
        id: 'Radio',
        label: 'Radio',
        props: RadioStory.default.args || RadioStory.BasicStory.args || {},
        component: RadioStory.BasicStory
    },
    {
        id: 'Select',
        label: 'Select',
        props: SelectStory.default.args || SelectStory.BasicStory.args || {},
        component: SelectStory.BasicStory
    },
    {
        id: 'Sheet',
        label: 'Sheet',
        props: SheetStory.default.args || SheetStory.BasicStory.args || {},
        component: SheetStory.BasicStory
    },
    // {
    //     id: 'Skeleton',
    //     label: 'Skeleton',
    //     props: SkeletonStory.default.args || SkeletonStory.BasicStory.args || {},
    //     component: SkeletonStory.BasicStory
    // },
    {
        id: 'Slider',
        label: 'Slider',
        props: SliderStory.default.args || SliderStory.BasicStory.args || {},
        component: SliderStory.BasicStory
    },
    {
        id: 'SubMenu',
        label: 'SubMenu',
        props: SubMenuStory.default.args || SubMenuStory.BasicStory.args || {},
        component: SubMenuStory.BasicStory
    },
    {
        id: 'SwitchButton',
        label: 'SwitchButton',
        props: SwitchButtonStory.default.args || SwitchButtonStory.BasicStory.args || {},
        component: SwitchButtonStory.BasicStory
    },
    // {
    //     id: 'Table',
    //     label: 'Table',
    //     props: TableStory.default.args || TableStory.BasicStory.args || {},
    //     component: TableStory.BasicStory
    // },
    {
        id: 'Tag',
        label: 'Tag',
        props: TagStory.default.args || TagStory.BasicStory.args || {},
        component: TagStory.BasicStory
    },
    {
        id: 'TagsInput',
        label: 'TagsInput',
        props: TagsInputStory.default.args || TagsInputStory.BasicStory.args || {},
        component: TagsInputStory.BasicStory
    },
    {
        id: 'Textarea',
        label: 'Textarea',
        props: TextareaStory.default.args || TextareaStory.BasicStory.args || {},
        component: TextareaStory.BasicStory
    },
    {
        id: 'TimePicker',
        label: 'TimePicker',
        props: TimePickerStory.default.args || TimePickerStory.BasicStory.args || {},
        component: TimePickerStory.BasicStory
    },
    {
        id: 'UploadButton',
        label: 'UploadButton',
        props: UploadButtonStory.default.args || UploadButtonStory.BasicStory.args || {},
        component: UploadButtonStory.BasicStory
    },
    {
        id: 'Video',
        label: 'Video',
        props: VideoStory.default.args || VideoStory.BasicStory.args || {},
        component: VideoStory.BasicStory
    }
]

export default componentsStructure