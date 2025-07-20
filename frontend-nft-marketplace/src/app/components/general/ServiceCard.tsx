import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  step,
}) => {
  return (
    <Card className="bg-content1">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="bg-primary/10 p-3 rounded-medium mb-4">
          <div className="text-primary text-3xl">{icon}</div>
        </div>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-default-500 text-small">{description}</p>
        <div className="mt-4 flex items-center">
          <span className="bg-primary/20 text-primary text-tiny font-medium px-2.5 py-1 rounded-full">
            Step {step}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};
