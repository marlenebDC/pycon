/** @jsx jsx */
import { Box, Flex, Grid, Heading, Text } from "@theme-ui/components";
import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { jsx } from "theme-ui";

import { compile } from "../../helpers/markdown";
import { Link } from "../link";
import { MetaTags } from "../meta-tags";
import { Tag } from "../tag";

type Props = {
  submission: {
    title: string;
    topic: {
      name: string;
    };
    audienceLevel: {
      name: string;
    };
    languages: {
      name: string;
    }[];
    tags: {
      id: string;
      name: string;
    }[];
    duration: {
      name: string;
      duration: number;
    };
    canEdit: boolean;
    abstract: string;
    elevatorPitch: string;
    notes: string;
    id: string;
  };
};

export const Submission: React.SFC<Props> = ({ submission }) => (
  <Fragment>
    <MetaTags title={submission.title} />

    <Grid
      sx={{
        mx: "auto",
        maxWidth: "container",
        gridColumnGap: 5,
        gridTemplateColumns: [null, null, "2fr 1fr"],
      }}
    >
      <Box sx={{ order: [0, null, 1] }}>
        <Box
          sx={{
            border: "primary",
            p: 4,
            backgroundColor: "cinderella",
            mb: 4,
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>
            <FormattedMessage id="cfp.topicLabel" />
          </Text>

          <Text sx={{ mb: 3 }}>{submission.topic.name}</Text>

          <Text sx={{ fontWeight: "bold" }}>
            <FormattedMessage id="cfp.audienceLevelLabel" />
          </Text>

          <Text sx={{ mb: 3 }}>{submission.audienceLevel.name}</Text>

          <Text sx={{ fontWeight: "bold" }}>
            <FormattedMessage id="cfp.languagesLabel" />
          </Text>

          <Text sx={{ mb: 3 }}>
            {submission.languages.map(lang => lang.name).join(", ")}
          </Text>

          <Text sx={{ fontWeight: "bold" }}>
            <FormattedMessage id="cfp.lengthLabel" />
          </Text>

          <Text>
            {submission.duration.name} ({submission.duration.duration}{" "}
            <FormattedMessage id="cfp.minutes" />)
          </Text>
        </Box>

        {submission.canEdit && (
          <Link
            variant="buttonFullWidth"
            href={`/:language/submission/${submission.id}/edit`}
          >
            Edit
          </Link>
        )}
      </Box>

      <Box>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Heading sx={{ fontSize: 6 }}>{submission.title}</Heading>
        </Flex>

        <Heading sx={{ mb: 2 }}>
          <FormattedMessage id="cfp.abstractLabel" />
        </Heading>

        <Text sx={{ mb: 4 }}>{compile(submission.abstract).tree}</Text>

        <Heading sx={{ mb: 2 }}>
          <FormattedMessage id="cfp.elevatorPitchLabel" />
        </Heading>

        <Text sx={{ mb: 4 }}>{compile(submission.elevatorPitch).tree}</Text>

        <Heading sx={{ mb: 2 }}>
          <FormattedMessage id="cfp.notesLabel" />
        </Heading>

        <Text sx={{ mb: 4 }}>{compile(submission.notes).tree}</Text>

        <Flex
          sx={{
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {submission.tags.map(tag => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </Flex>
      </Box>
    </Grid>
  </Fragment>
);
