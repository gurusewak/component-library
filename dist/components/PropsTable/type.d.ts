export interface PropType {
    name: string;
    type: {
        name: string;
    };
    flags: {
        isOptional: boolean;
    };
    comment?: {
        summary?: [{
            text?: string;
        }];
    };
}
export interface PropsTableProps {
    [key: string]: PropType;
}
//# sourceMappingURL=type.d.ts.map